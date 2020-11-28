class RecipesController < ApplicationController

    def index
        render :json => Recipe.all, :include => :category; 
    end

    def create
        # binding.pry
        category = Category.find_by(name: params[:category])      
        recipe = Recipe.create(name: params[:name], category: category, memory: params[:memory], directions: params[:directions])
        render :json => recipe, :include => :category, :status => 201
    end

end
