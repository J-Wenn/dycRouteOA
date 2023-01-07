export const imgRequire = (pathname: string) => {
	return new URL(`/src/assets/img/${pathname}.png`, import.meta.url).href
}
