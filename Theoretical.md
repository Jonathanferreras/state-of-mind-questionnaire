# Unter

## A democratized taxi drivers platform

### Data Models

There will be a few data models for this system: Driver, Passenger, Trip, and Shift.
Some things to consider:

1. We need registration functionality for both drivers and passengers.
2. Collect ratings for driver/passenger ideally towards the end of each trip.
3. Calculate driver payment towards end of trip as well.
4. We have to assume that there will always be at least one passenger
5. As data grows, thinking about how to get end of day data the fastest and most efficient way. Optimized queries for example

```
Driver {
  Name,
  Car: {
    Model,
    Make,
    LicensePlate,
    Registration
  },
  Trips: Trip[],
  Rating: AVG(Trips[i].Rating.Passenger)
  Shifts: Shift[]
}

Passenger {
  Name,
  Trips: Trip[],
  Rating: AVG(Trips[i].Rating.Driver) // Q2. Calculating the average of ratings
}

Trip {
  Date,
  StartTime,
  EndTime,
  Rating: {
    Passenger, // Q2. Adding this field allows Drivers to leave a rating for passengers
    Driver
  },
  Driver,
  Passenger(s),
  Tip,
  Miles
  TripCost,
  DriverPay: Calc(StartTime, EndTime, Passenger(s), Miles)
}

Shift {
  Date,
  StartTime,
  EndTime
}


```

### System Breakdown

How many drivers worked today:
This function can execute toward the end of day and can search through the "Shifts" field for the "Driver" model and if a "Shift.Date" === Today, we can return the result which can look like the following:

```
WorkedToday {
  Drivers: Driver[],
  Count
}
```

How many rider used the platform today:
The logic for this will be a bit similar to the previous function but instead we search through the "Trips" field and make a comparison "Trip.Date" === Today

```
RidersToday{
  Passenger[],
  Count
}
```

Total amount of tips per driver:
This function will simply sum up the "Tip" field within "Driver.Trips[i].Tip"

```
TotalTips [
  {
    Driver.Name,
    TotalTip
  },
  ...etc
]
```

Highest rated driver & Lowest rated driver:
This can be accomplish by first sorting the Drivers we have first by using "Driver.Rating" and then returning the first driver and the last driver.

```
MinMaxRatedDrivers {
  Min: Drivers[0],
  Max: Drivers[Drivers.length - 1]
}
```
