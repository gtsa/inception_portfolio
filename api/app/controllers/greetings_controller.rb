class GreetingsController < ApplicationController
  # Since we're building an API, skip CSRF protection
  # protect_from_forgery with: :null_session

  def hello
    links = {
      app1: I18n.t('links.app1'),
      app2: I18n.t('links.app2'),
      api: I18n.t('links.api'),
      imosaic: I18n.t('links.imosaic'),
      backlog: I18n.t('links.backlog'),
      portfolio: I18n.t('links.portfolio'),
      blog: I18n.t('links.blog'),
      hub: I18n.t('links.hub'),
      python_apps: I18n.t('links.python_apps'),
    }

    render json: {
      links: links
    }
  end
end
