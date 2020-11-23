class RecipesController < ApplicationController

    def index
        render :json => Recipe.all, :include => :category 
    end

    def destroy
        Recipe.find(params[:id]).destroy
        render :json => {id: params[:id]}
    end
    
end
