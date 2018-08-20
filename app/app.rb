module WebpackIntegration
  class App < Padrino::Application
    register Padrino::Mailer
    register Padrino::Helpers

    enable :sessions

    get :index, :map => '/*page', :priority => :low do
      render 'exordo_app'
    end

  end
end
