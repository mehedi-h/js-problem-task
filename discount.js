/*
if you buy 100 ticket, per ticket price will be 100tk.
if you buy > 100 but < 200 ticket,then 1st 100 will be 100tk and 101 - 200 will be 80tk.
if you buy 200+ ticket then-
1st 100 ticket will be 100tk.
101 upto 200 ticket will be 80tk
and 200+ will be 60tk. 
*/

function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100rate = 80;
    const restTicketRate = 60;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity*first100rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100price = 100*first100rate;
        const restTicketQuantity = ticketQuantity-100;
        const restTicketPrice = restTicketQuantity*second100rate;
        const totalPrice = first100price+restTicketPrice;
        return totalPrice; 
    }
    else {
        const first100price = 100*first100rate;
        const second100Price = 100*second100rate;
        const restTicketQuantity = ticketQuantity-200;
        const restTicketPrice = restTicketQuantity*restTicketRate;
        const totalTicketPrice = first100price+second100Price+restTicketPrice;
        return totalTicketPrice;
    }
}

const ticketCost = ticketPrice(300);
console.log(ticketCost);