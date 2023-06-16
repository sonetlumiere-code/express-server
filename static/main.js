console.log('js running')

async function apiCall() {
  try {
    const res = await fetch('http://127.0.0.1:3131/products')
    const data = await res.json();
    UI(data);
  } catch (error) {
    console.log(error);
  }
}

apiCall();

function UI(data) {
  console.log(data);
}

async function postProduct(product) {
  try {
    const res = await fetch('http://127.0.0.1:3131/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  console.log(res);
  
  } catch (error) {
    console.log(error);
  }
}

const product = {
  id: 1,
  name: 'pc',
  price: 120
}
postProduct(product)


async function updateProduct(id) {
  try {
    const res = await fetch('http://127.0.0.1:3131/product/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    console.log(res);
  } catch (error) {
    console.log(error);
  }

}

// updateProduct(1)