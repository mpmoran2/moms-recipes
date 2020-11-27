class RecipesController < ApplicationController

    def index
        render :json => Recipe.all, :include => :category; 
    end

    def create
        # binding.pry
        category = Category.find_by(name: params[:category])
        memory = Recipe.create(memory: params[:memory])
        directions = Recipe.create(directions: params[:directions])        
        recipe = Recipe.create(name: params[:name], category: category, memory: memory, directions: directions)
        render :json => recipe, :include => :category, :status => 201
    end
    
    # def destroy
    #     Recipe.find(params[:id]).destroy
    #     render :json => {id: params[:id], message: "Record was successfully deleted."}, :status => 200
    # end

    private 

   
end
