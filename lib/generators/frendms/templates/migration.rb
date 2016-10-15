class CreateElementsTable < ActiveRecord::Migration
  def self.up
    create_table :elements do |t|
      t.string :elementId
      t.integer :elementIndex
      t.string :frender
      t.text :text

      t.timestamps
    end
  end

  def self.down
    drop_table :elements
  end
end
