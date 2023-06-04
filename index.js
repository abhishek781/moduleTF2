function getMenu() {
  return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      // Display food items to the user
      console.log('Menu:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Burger A', 'Burger B', 'Burger C'];
      const order = {
        burgers: burgers
      };
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thankYouFnc() {
  alert('Thank you for eating with us today!');
}

// Promise chaining using async/await
async function restaurantFlow() {
  try {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const orderStatus = await orderPrep();
    console.log('Order status:', orderStatus);
    const paymentStatus = await payOrder();
    console.log('Payment status:', paymentStatus);
    if (paymentStatus.paid) {
      thankYouFnc();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

restaurantFlow();
