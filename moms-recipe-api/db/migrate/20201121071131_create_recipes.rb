class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.integer :category_id
      t.text :memory
      t.text :directions
      
      t.timestamps
    end
  end
end
