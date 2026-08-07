// Controller for the Booking creation view
app.controller('bookingController', function($scope, bookingService) {
  $scope.booking = {
    name: "",
    email: "",
    carType: "",
    carModel: "",
    startDate: "",
    endDate: ""
  };

  $scope.carTypes = ["Sedan", "SUV", "Cruiser", "Off-road", "Luxury"];
  $scope.carModels = {
    "Sedan": ["BMW 5 Series", "Mercedes C-Class", "Audi A4"],
    "SUV": ["Range Rover Evoque", "Toyota Land Cruiser", "Jeep Grand Cherokee"],
    "Cruiser": ["Rolls Royce Phantom", "Bentley Continental", "Aston Martin DB11"],
    "Off-road": ["Ford Bronco", "Jeep Wrangler", "Toyota 4Runner"],
    "Luxury": ["Lamborghini Urus", "Ferrari Portofino", "Porsche 911"]
  };

  $scope.updateCarModels = function() {
    $scope.availableModels = $scope.carModels[$scope.booking.carType];
  };

  $scope.submitBooking = function() {
    bookingService.bookCar($scope.booking)
      .then(function(response) {
        alert("Booking Successful!");
        $scope.booking = {}; // Reset the form
      })
      .catch(function(error) {
        alert("Error in booking: " + error.data.error);
      });
  };
});
