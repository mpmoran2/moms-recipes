class RecipesController < ApplicationController

    def index
        render :json => Recipe.all, :include => :category, :status => 200
    end

    def create
        category = Category.find_by(name: params[:category])
        recipe = Recipe.create(name: params[:name], category: category)
        render :json => recipe, :status => 201
    end

    def destroy
        Recipe.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record was successfully deleted."}, :status => 200
    end
    
end
