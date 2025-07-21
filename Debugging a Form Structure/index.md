<form action="/submit">
  <label Name="username">Enter Username:</label>
  <input type="text" id="username" name="username>

  <label for="passcode">Password:</label>
  <input typ="password" id="passcode" name="password">

  <button Submit>Submit Form</buttn>
</form>



=> label should use the for attribute (not Name) to associate with the input’s id
=> The attribute value was missing the closing quote ("), making the HTML invalid.
=> The attribute typ is a typo. Corrected to type.
=> Submit is not a valid attribute. The proper way is type="submit" to define the button behavior.
=> Typo in the closing tag. Corrected to button.
