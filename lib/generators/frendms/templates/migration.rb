class CreateElementsTable < ActiveRecord::Migration
  def self.up
    create_table :elements do |t|
      t.string :elementId
      t.string :page
      t.text :text

      t.timestamps
    end
  end

  def self.down
    drop_table :elements
  end
end