Rails.application.routes.draw do
  resources :directions
  resources :ingredients
  resources :categories
  resources :recipes, only: [:index, :destroy, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
