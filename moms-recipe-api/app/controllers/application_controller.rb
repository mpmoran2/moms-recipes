class ApplicationController < ActionController::API

    def grab_recipe
        @recipe ||= Recipe.find_by(id: params[:recipe_id])
    end
    
end
