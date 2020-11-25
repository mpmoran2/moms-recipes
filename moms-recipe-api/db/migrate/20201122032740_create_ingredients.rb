class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :amount
      t.integer :recipe_id
      # t.string :item1
      # t.string :item2
      # t.string :item3
      # t.string :item4
      # t.string :item5
      # t.string :item6
      # t.string :item7
      # t.string :item8
      # t.string :item9
      # t.string :item10
      # t.string :item11
      # t.string :item12

      t.timestamps
    end
  end
end
