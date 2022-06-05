
const URL = "https://medium.com/feed/tartanhacks";

function extractCDATA(e : Element | null) {
	if (e == null){
		return "";
	}
  var child = e.firstChild;
	if (child instanceof CharacterData) {
    var cd = child as CharacterData;
		return cd.data;
	}
	return "";
}

export default async function getRss() {
	const res = await fetch(`https://api.allorigins.win/get?url=${URL}`);
	const { contents } = await res.json();
	const feed = new window.DOMParser().parseFromString(contents, "text/xml");
	const items = feed.querySelectorAll("item");
	const feedItems = [...items].map((el) => ({
		link: el.querySelector("link")?.innerHTML ?? "",
		title: extractCDATA(el.querySelector("title")),
		author: extractCDATA(el.querySelector("creator")),
		content: extractCDATA(el.querySelector("encoded"))
	}));
	return feedItems;
};