# Bugs Login Page
1. Initial image doesn't git screen size. 
2. Health status only provides "{Status: "up"}
3. The "Register" and "Login" are too close
4. The "Register" and "Login" are the wrong color
5. The "Register" should also be enclosed the specified gray box
6. The "Register" and "Login" spacing is off and should be updated to requirements
7. The textarea for "Email address" and "Passwored" are not supposed to have a box, background should be the same as the modal background
8. The modal is too rectangular. Should match product specifications.
9. The asterix needs to be removed from "Email address" and "Password"
10. The notification for an invalid email address is incorrect
11. Not necessarily a bug, but important. The design specs do not show if there should be a difference between the notifications for email invalid, no email or password. The design specs only show for invalid email. I would speak with Product Owner/Manager and team manager to clarify the notification to customer for each. 
12. Font weight and Line weight are off
13. Is there supposed to be a strength indicator for password, or are weak passwords OK?
14. Login is spelled incorrectly. Should be "Login" and it is "Log In" And it should not be all caps.
15. In the design spec the following URL is borked: http://localhost:9876/login -- Notification received "Cannot GET /login"
16. If I type in a invalid email with a password I don't receive any notification about my email being invalid.
17. No option to update password if customer forgot

# Bugs Reigister Page
1. Image is again off/enlarged, doesn't fit screen size as shown in design
2. Order of requested register information is wrong. Email should be first. Name should be second. And we are missing confirm password option.
3. Asterixs need to be removed 
4. Font weight and line weight are off
5. As with Login the "Cancel" and "Register" are off in spacing, color, and box. 
6. As with "Login" page the notification for an invalid email is also incorrect.
7. Spelling of "Register" is incorrect. It should not be all caps.
8. Remove "Cancel" and replace it with Register spelled correctly. "Login" should be on the right.
9. The modal to "Register" is also too rectangular.
10. Is there supposed to be a strength indicator for password, or are weak passwords OK?

# Bugs Successful Reigister Page
1. Home URL is not was is specified in the design specs "9876/home/1" vs. "9876/home" - with each new login it gives me a new number (i.e. Login again and it is "9876/home/2). This would be bad for automation. It would always fail.
2. Color of "Log Out"
3. Modal is too rectangular
4. Image doesn't fit screen size as shown in design specs
5. Logout is spelled incorrectly and it should not be all caps.

# Bugs Home Page View
1. I am able to view homepage with a user specification of "Undefined" when not logged in.
2. Button for Logout is wrong color
3. Font should not be all caps and it should be spelled as specified "Logout"


# Bugs Logout and Login
1. After logging in, if I select logout and then try to login I am unable to log back in. I am told incorrect username and password.