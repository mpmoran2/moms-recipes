class IngredientsController < ApplicationController
    def new
        grab_recipe         
        @ingredient = Ingredient.new
    end

    def create
        recipe = Recipe.find_by(id: params[:ingredient][:recipe_id])
        ingredient = Ingredient.new(ingredient_params)
    end 

    def index
        render :json => Ingredient.all, :include => :recipe, :status => 200
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:name, :amount, :recipe_id)
    end

    # def ingredient_params
    #     params.require(:ingredients).permit(:item1, :item2, :item3, :item4, :item5, :item6, :item7, :item8, :item9, :item10, :item11, :item11, :item12)
    # end
end
