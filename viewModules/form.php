<section id="form">

    <!-- Need to insert action -->
    <form class="form" id="enquiryform" action="test" method="POST">

        <h2 class="form__title">Make an enquiry&hellip;</h2>
        <p class="form__intro">Please fill in your details and I'll be in touch within 48 hours.&hellip;</p>

        <div class="form__fields">

            <div class="form__field">
                <input id="firstname" class="form__input" name="firstname" type="text" value="" placeholder="First name" />
                <!-- {{ svg.use('icn_name', 'line-icon size22 competition-form__input__icon') }} -->
                <div id="firstNameError" class="form__error-message">Please enter your first name</div>
            </div>

            <div class="form__field">
                <input id="lastname" class="form__input" name="lastname" type="text" value="" placeholder="Last name" />
                <!-- {{ svg.use('icn_name', 'line-icon size22 competition-form__input__icon') }} -->
                <div id="lastNameError" class="form__error-message">Please enter your last name</div>
            </div>

            <div class="form__field">
                <input id="companyname" class="form__input" name="companyname" type="text" value="" placeholder="Company name (if applicable)" />
                <!-- {{ svg.use('icn_name', 'line-icon size22 competition-form__input__icon') }} -->
            </div>

        </div>

        <div class="form__fields">

            <div class="form__field">
                <input id="email" class="form__input js-email-input" name="email" type="email" value="" placeholder="Email Address" />
                <!-- {{ svg.use('icn_email', 'line-icon size22 competition-form__input__icon') }} -->
                <div id="emailAddressError" class="form__error-message">Please enter a valid email address</div>
            </div>

            <div class="form__field">
                <input id="mobile" class="form__input" name="phone" type="text" value="" placeholder="Mobile" />
                <!-- {{ svg.use('icn-phone', 'line-icon size22 competition-form__input__icon') }} -->
                <div id="mobileError" class="form__error-message">Please enter a valid phone number</div>
            </div>

        </div>

        <p class="form__options">Would you prefer to be contacted by&hellip;</p>

        <div class="form__radio-grid">

            <input type="radio" id="phoneplease" name="contactbyphone" class="js-radio-button" value="Contact by phone">
            <label for="phoneplease" class="form__input form__input--radio">Contact by phone</label>

            <input type="radio" id="emailplease" name="contactbyemail" class="js-radio-button" value="Contact by email">
            <label for="emailplease" class="form__input form__input--radio">Contact by email</label>

        </div>

        <p class="form__comments">Please enter additional information here</p>

        <textarea class="form__comment" name="comment" form="enquiryform" placeholder="Enter your additional notes here">Enter text here&hellip;</textarea>

        <div class="form__submit">
            <button id="submit" name="submit" type="submit" class="form__button form__button--submit js-track" data-label="form-submit-button">Submit</button>
        </div>

    </form>

</section>