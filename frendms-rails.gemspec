# -*- encoding: utf-8 -*-
# stub: frendms-rails 0.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "frendms-rails"
  s.version = "0.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib"]
  s.authors = ["Tyson Holub"]
  s.bindir = "exe"
  s.date = "2016-01-27"
  s.description = "Click and edit any html element. Changes are saved to the database via ajax. When the page is loaded the changes will be injected into that element."
  s.email = ["tyson@tysonholub.com"]
  s.files = [".gitignore", ".travis.yml", "CODE_OF_CONDUCT.md", "Gemfile", "LICENSE.txt", "README.md", "Rakefile", "app/controllers/frendms/element_controller.rb", "app/models/frendms/element.rb", "bin/console", "bin/setup", "config/routes.rb", "frendms-rails.gemspec", "lib/frendms/rails.rb", "lib/frendms/rails/version.rb", "lib/generators/frendms/frendms_generator.rb", "lib/generators/frendms/templates/migration.rb", "vendor/assets/javascripts/dompath.js", "vendor/assets/javascripts/frendms.js", "vendor/assets/stylesheets/frendms.css"]
  s.homepage = "https://github.com/tysonholub/frendms-rails"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "The Front End Management System"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.10"])
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.10"])
      s.add_dependency(%q<rake>, ["~> 10.0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.10"])
    s.add_dependency(%q<rake>, ["~> 10.0"])
  end
end
