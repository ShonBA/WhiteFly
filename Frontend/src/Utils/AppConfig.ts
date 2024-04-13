class AppConfig {
	// WhiteFly Routes
	public readonly homeRoute = "/home"
	public readonly rememberPagesRoute = "/remember-pages"
	public readonly ourServicesRoute = "/our-services"
	public readonly ourProductsRoute = "/our-products"
	public readonly contactUsRoute = "/contact-us"
	public readonly loginRoute = "/login"
	public readonly registerRoute = "/register"

	// Memorial Routes
	public readonly rememberRoute = "/remember/"
	public readonly galleryRoute = "/gallery"
	public readonly obituariesRoute = "/obituaries"
	public readonly lifeAfterRoute = "/life-after"
	public readonly prayBookRoute = "/pray-book"
	public readonly toRememberRoute = "/to-remember"

	// URL'S
	public readonly PersonsUrl = "http://localhost:4000/api/persons/"

}

export const appConfig = new AppConfig();
