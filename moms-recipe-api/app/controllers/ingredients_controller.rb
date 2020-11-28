class IngredientsController < ApplicationController   

    def index
        render :json => Ingredient.all
    end

    def create        
        recipe = Recipe.find_by(id: params[:recipe_id])        
        data = params[:data].delete_if {|a| a == "" } 
        data.each do |a|
            item = Ingredient.create(name: a, recipe_id: recipe.id)
        end  
        render :json => recipe.ingredients, :status => 201
    end 

end
