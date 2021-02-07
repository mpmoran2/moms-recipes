class Recipe < ApplicationRecord
    belongs_to :category
    # belongs_to :user
    has_many :ingredients
end
