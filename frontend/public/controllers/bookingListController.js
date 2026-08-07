// Controller for listing all bookings and handling edit/delete operations
app.controller('bookingListController', function($scope, $location, bookingService) {
  // Function to load bookings
  function loadBookings() {
    bookingService.getAllBookings()
      .then(function(response) {
        $scope.bookings = response.data;
      })
      .catch(function(error) {
        console.error("Error fetching bookings:", error);
        $scope.error = "Could not load bookings.";
      });
  }

  loadBookings();

  // Navigate to edit view
  $scope.editBooking = function(id) {
    $location.path('/editBooking/' + id);
  };

  // Delete booking
  $scope.deleteBooking = function(id) {
    if (confirm("Are you sure you want to delete this booking?")) {
      bookingService.deleteBooking(id)
        .then(function(response) {
          alert("Booking deleted successfully!");
          loadBookings(); // Refresh list
        })
        .catch(function(error) {
          alert("Error deleting booking: " + error.data.error);
        });
    }
  };
});
