# Frendms::Rails

Frond End Management System gem.

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

This will generate the migration for the elements table used to store element values. Use with Devise authentication to update front end elements on the fly via ajax. When logged in, any elements with the class "frend" will be editable.

Add to the bottom of your layout file

<% if user_signed_in? %>
<script>
	$(document).ready(function(){
		$('.frend').addClass('enabled')
	})
</script>
<% end %>

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake false` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/frendms-rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

