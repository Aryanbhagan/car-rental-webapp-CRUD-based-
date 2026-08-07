// AngularJS service for interacting with the backend API
app.service('bookingService', function($http) {
  var baseUrl = "/api/bookings";

  // Create booking
  this.bookCar = function(booking) {
    return $http.post(baseUrl, booking);
  };

  // Get all bookings
  this.getAllBookings = function() {
    return $http.get(baseUrl);
  };

  // Get booking by ID
  this.getBookingById = function(id) {
    return $http.get(baseUrl + '/' + id);
  };

  // Update booking
  this.updateBooking = function(id, booking) {
    return $http.put(baseUrl + '/' + id, booking);
  };

  // Delete booking
  this.deleteBooking = function(id) {
    return $http.delete(baseUrl + '/' + id);
  };
});
