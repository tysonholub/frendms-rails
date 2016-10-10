# Frendms

The Rails Frond End Management System.

Use this gem to modify the front end of any website on the fly via ajax.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'frendms-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install frendms-rails

## Usage

After installation execute:

    $ rails g frendms

This will generate the migration for the elements table used to store element values. Use with Devise authentication to update front end elements on the fly via ajax. When logged in, any child elements of class "frender" with the class "frend" will be editable.

Add to the bottom of your layout file

```ruby
<% if user_signed_in? %>
<script>
	$(document).ready(function(){
		$('.frend').addClass('enabled')
	})
</script>
<% end %>
```

Example of an editable layout:

```html
<html>
<body>
  <section class="frender" id="header">
    <header class="frend">I'm an editable header</header>
  </section>

  <section class="frender" id="<%= "#{controller_name}-#{action_name}" %>">
    <%= yield %> <!-- yield frend class elements per controller action -->
  </section>

  <section class="frender" id="footer">
    <footer class="frend">I'm an editable footer</footer>
  </section>
</body>

<% if user_signed_in? %>
<script>
	$(document).ready(function(){
		$('.frend').addClass('enabled')
	})
</script>
<% end %>

</html>  
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/frendms-rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
