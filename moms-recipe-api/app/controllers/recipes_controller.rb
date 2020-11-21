class RecipesController < ApplicationController
    def index
        render :json => Recipe.all, :include => :category
    end
end
