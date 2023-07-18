import { redirect } from '@sveltejs/kit';

export async function load({ params, url, fetch }) {
  const uid = url.searchParams.get('uid');

  if (uid) {
    const theEmailResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/newsletters/' + uid, {
      method: 'GET'
    })
    const theEmailData = await theEmailResponse.json();
    if (theEmailData.data) {
      const data = {
        check: false
      }
      await fetch(import.meta.env.VITE_STRAPI_URL + '/api/newsletters/' + theEmailData.data.id, {
        method: 'PUT',
        body: JSON.stringify({ data }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      throw redirect(307, '/');
    }
  }
}