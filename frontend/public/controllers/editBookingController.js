app.controller('editBookingController', function($scope, $routeParams, $location, bookingService) {
  var bookingId = $routeParams.id;

  // Define car types and models
  $scope.carTypes = ["Sedan", "SUV", "Cruiser", "Off-road", "Luxury"];
  $scope.carModels = {
    "Sedan": ["BMW 5 Series", "Mercedes C-Class", "Audi A4"],
    "SUV": ["Range Rover Evoque", "Toyota Land Cruiser", "Jeep Grand Cherokee"],
    "Cruiser": ["Rolls Royce Phantom", "Bentley Continental", "Aston Martin DB11"],
    "Off-road": ["Ford Bronco", "Jeep Wrangler", "Toyota 4Runner"],
    "Luxury": ["Lamborghini Urus", "Ferrari Portofino", "Porsche 911"]
  };

  // Fetch the booking details by ID
  bookingService.getBookingById(bookingId)
    .then(function(response) {
      $scope.booking = response.data;
      
      // Convert date strings to Date objects if necessary
      if ($scope.booking.startDate) {
        $scope.booking.startDate = new Date($scope.booking.startDate);
      }
      if ($scope.booking.endDate) {
        $scope.booking.endDate = new Date($scope.booking.endDate);
      }
      
      // Populate available models based on the selected car type
      $scope.availableModels = $scope.carModels[$scope.booking.carType];
    })
    .catch(function(error) {
      console.error("Error fetching booking:", error);
    });

  // Update available models when the car type changes
  $scope.updateCarModels = function() {
    $scope.availableModels = $scope.carModels[$scope.booking.carType];
  };

  // Submit the updated booking
  $scope.updateBooking = function() {
    bookingService.updateBooking(bookingId, $scope.booking)
      .then(function(response) {
        alert("Booking updated successfully!");
        $location.path("/bookings");
      })
      .catch(function(error) {
        alert("Error updating booking: " + error.data.error);
      });
  };
});
