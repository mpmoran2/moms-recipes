class IngredientsController < ApplicationController   

    def index
        # binding.pry
        render :json => Ingredient.all
    end

    def create        
        recipe = Recipe.find_by(id: params[:recipe_id])        
        data = params[:data].delete_if {|a| a == "" } 
        data.each do |a|
            item = Ingredient.create(name: a, recipe_id: recipe.id)
        end  
        # item1 = Ingredient.new(item1: params[:item1])  
        # item2 = Ingredient.new(item2: params[:item2]) 
        # item3 = Ingredient.new(item3: params[:item3]) 
        # item4 = Ingredient.new(item4: params[:item4]) 
        # item5 = Ingredient.new(item5: params[:item5]) 
        # item6 = Ingredient.new(item6: params[:item6]) 
        # item7 = Ingredient.new(item7: params[:item7]) 
        # item8 = Ingredient.new(item8: params[:item8]) 
        # item9 = Ingredient.new(item9: params[:item9]) 
        # item10 = Ingredient.new(item10: params[:item10]) 
        # item11 = Ingredient.new(item11: params[:item11]) 
        # item12 = Ingredient.new(item12: params[:item12], recipe: recipe, item1: item1, item2: item2, item3: item3, item4: item4, item5: item5, item6: item6, item7: item7, item8: item8, item9: item9, item10: item10, item11: item11) 
        render :json => recipe.ingredients
        # render :json => ingredient, include: => :recipe_id, :status => 201
    end 

   

    private

    # def ingredient_params
    #     params.require(:ingredients).permit(:recipe_id, :item1, :item2, :item3, :item4, :item5, :item6, :item7, :item8, :item9, :item10, :item11, :item11, :item12)
    # end
end
