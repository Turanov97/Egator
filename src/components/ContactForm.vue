<template>
  <section class="contact">
    <div class="container contact__container">
      <aside class="contact__asida">
        <div class="asida__img">
          <img src="img/contact.svg" alt="" />
        </div>
        <h2>Contact Us</h2>
        <p>
          Asperiores venim vel doloribus assumenda soluta balanditiis dolores
          qui voluptates, consequater vitae.
        </p>
        <ul class="contact__details">
          <li>
            <i class="uil uil-phone-times"></i>
            <h5>+2333355244782</h5>
          </li>
          <li>
            <i class="uil uil-envelope"></i>
            <h5>suppor@egattor.com</h5>
          </li>
          <li>
            <i class="uil uil-location-point"></i>
            <h5>Accra, Ghana</h5>
          </li>
        </ul>
        <ul class="contact__socials">
          <li>
            <a href="https://facebook.com"
              ><i class="uil uil-facebook-f"></i
            ></a>
          </li>
          <li>
            <a href="https://instagram.com"
              ><i class="uil uil-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com"><i class="uil uil-twitter"></i></a>
          </li>
          <li>
            <a href="https://linkedin.com"
              ><i class="uil uil-linkedin-alt"></i
            ></a>
          </li>
        </ul>
      </aside>

      <form class="contact__form">
        <div class="form__name">
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="Email Address"
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="Message"
          rows="7"
          placeholder="Mesasge"
          required
        ></textarea>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
