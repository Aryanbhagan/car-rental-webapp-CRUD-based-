// Configure the routes for the AngularJS app
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "homeController"
    })
    .when("/booking", {
      templateUrl: "views/booking.html",
      controller: "bookingController"
    })
    .when("/bookings", {
      templateUrl: "views/bookings.html",
      controller: "bookingListController"
    })
    .when("/editBooking/:id", {
      templateUrl: "views/editBooking.html",
      controller: "editBookingController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
