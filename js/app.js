 /* User models */
 var bob = {
     age: 74,
     icon: 'assets/e1.png',
     fullName: 'Bob van Enschede',
     videoTraining: '1/week',
     avgSteps: '2390',
     avgActivity: '30min/day'
 };

 var ana = {
     age: 82,
     icon: 'assets/e3.jpg',
     fullName: 'Ana van Ootmarsum',
     videoTraining: '1/week',
     avgSteps: '6830',
     avgActivity: '5h/day'
 };

 var jason = {
     age: 65,
     icon: 'assets/e5.jpg',
     fullName: 'Jason Lee',
     videoTraining: '3/week',
     avgSteps: '4360',
     avgActivity: '2h/day'
 };

 var currentUser = {};

 /* Utility function */
 var hideAllViews = function () {

     $('#login-page').hide();
     $('#home-page').hide();
     $('#user-page').hide();
     $('#user-video-trainer').hide();
     $('#user-video-bad').hide();
     $('#user-video-good').hide();

 };

 var showLoginPage = function () {

     $('#login-page').show();
 };

 var showHomePage = function () {

     $('#home-page').show();
 }

 var showUserPage = function (user) {

     /* set user assets */
     $('#user-age').html(user.age);
     $('#user-full-name').html(user.fullName);
     $('#user-profile-pic').attr('src', user.icon);
     $("#video-trainer-use").html(user.videoTraining);
     $("#avg-steps").html(user.avgSteps);
     $("#avg-activity").html(user.avgActivity);


     /* show the page */
     $('#user-page').show();
 };

 var showVideoTrainer = function () {

     $('#user-video-trainer').show();
 };

 var showMostEnjoyedVideo = function () {

     $('#user-video-good').show();
 };

 var showMostDifficultVideo = function () {

     $('#user-video-bad').show();
 };

 $(document).ready(function () {
     /*    run this on application startup    */

     // hide all views
     hideAllViews();
     // show the login page
     showLoginPage();



     /*   event handlers for the login page   */
     $('#login').click(function () {
         hideAllViews();
         showHomePage();
     });



     /*   event handlers for the home page   */

     $('#item1_3').click(function () {
         currentUser = bob;
         hideAllViews();
         showUserPage(currentUser);
     });

     $('#item1_4').click(function () {
         currentUser = ana;
         hideAllViews();
         showUserPage(currentUser);
     });

     $('#item1_5').click(function () {
         currentUser = jason;
         hideAllViews();
         showUserPage(currentUser);
     });


     /*   event handlers for the user page   */

     $("#video-trainer-details-btn").click(function () {
         hideAllViews();
         showVideoTrainer();
     });

     $("#steps-details-btn").click(function () {
         hideAllViews();
         showVideoTrainer();
     });

     $("#activity-details-btn").click(function () {
         hideAllViews();
         showVideoTrainer();
     });

     $('#backToHomePage').click(function () {
         hideAllViews();
         showHomePage();
     });



     /*   event handlers for the video trainer page   */

     $("#backToUserPage").click(function () {
         hideAllViews();
         showUserPage(currentUser);
     });

     $('#most-enjoyed-video-btn').click(function () {
         hideAllViews();
         showMostEnjoyedVideo();

     });

     $('#most-difficult-video-btn').click(function () {
         hideAllViews();
         $('#user-video-bad').show();
     });



     /*   event handlers for the most enjoyed video & most difficult video pages   */

     $(".backToVideoTrainer").click(function () {

         // stop all playing videos
         $('#gwd-video_enjoyed').get(0).pause();
         $('#gwd-video_enjoyed').get(0).currentTime = 0;

         $('#gwd-video_difficult').get(0).pause();
         $('#gwd-video_difficult').get(0).currentTime = 0;

         // go to the video trainer page
         hideAllViews();
         showVideoTrainer();
     });

 });