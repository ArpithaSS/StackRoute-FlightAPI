let flights=[
    {
        id: 1,
        flight_name: "Indigo",
        flight_number: "6E2766",
        source: "Bangalore",
        destination: "Chandigarh",
        flight_schedule_date: "2024-07-01"
    },
    {
        id: 2,
        flight_name: "Air India",
        flight_number: "AI860",
        source: "Bangalore",
        destination: 'Mumbai',
        flight_schedule_date:"16-07-2024"
    },
    {
        id: 3,
        flight_name: "Vistara",
        flight_number: "UK941",
        source: "Bangalore",
        destination: 'Delhi',
        flight_schedule_date: "17-07-2024"
    },
    {
        id: 4,
        flight_name: "SpiceJet",
        flight_number: "SG8157",
        source: "Bangalore",
        destination: "Goa",
        flight_schedule_date: "18-07-2024"
    },
    {
        id: 5,
        flight_name: "xyz",
        flight_number: "7abc",
        source: "B",
        destination: "C",
        flight_schedule_date: "15-07-2025"
    }
]


const getFlights=(req,res)=>{
    const response=
    res.send(flights);
}

const getHomePage=(req,res)=>{
    res.send("Home")
};

const addFlight=(req,res)=>{
    let flights=[];
    const {flight_name,flight_number,source,destination,flight_schedule_date}=req.body;
    if(!flight_name || !flight_number || !source || !destination || !flight_schedule_date) {
       return res.status(400).json({error: 'Missing required Flight Details'});
    }
    const newFlight={flight_name,flight_number,source,destination,flight_schedule_date};
    flights.push(newFlight);
    res.status(201).json(newFlight);
};

const modifyFlight=(req,res)=>{
    const {flight_number}=req.params;
    const {flight_name,source,destination,flight_schedule_date}=req.body;
    const flight=flights.find((f)=>f.flight_number===flight_number);
    if(!flight) {
        res.status(404).json({error: "Flight not found"});
    }
    if(flight_name) {
        flight.flight_name=flight_name;
    }
    if(source) {
        flight.source=source;
    }
    if(destination) {
        flight.destination=destination;
    }
    if(flight_schedule_date) {
        flight.flight_schedule_date=flight_schedule_date;
    }
    res.status(200).json(flight);
};

const deleteFlight=(req,res)=>{
    const {flight_number}=req.params;
    flights=flights.filter((f)=>f.flight_number !==flight_number);
    res.status(204).end();
};

const searchFlightsByNumber=(req,res)=>{
    const {flight_number}= req.params;
    let result=flights;
    if(flight_number) {
        result=result.find((f)=>f.flight_number===flight_number);
        if(!result) {
            res.status(404).json({error: "Flight not found"});
        }
        else {
            res.status(200).json(result);
        }
    }

}
const searchFlightsByDate=(req,res)=>{
    const {flight_schedule_date}= req.params;
    let result=flights;
    if(flight_schedule_date) {
      result=flights.filter(f=>f.flight_schedule_date=== flight_schedule_date);
        if(result.length===0) {
            res.status(404).json({error: "Flight not found"});
        }
        else {
            res.status(200).json(result);
        }
    }


}
const searchFlightsByPlace=(req,res)=>{
    const {source, dest}=req.query;
    let result=flights;
    if(source && dest) {
        result=flights.filter(f=>f.source=== source && f.destination=== dest);
        if(!result) {
            res.status(404).json({error: "Flight not found"});
        }
        else {
        res.status(200).json(result); 
        } 
    }

}



module.exports={getFlights,getHomePage, addFlight,modifyFlight,deleteFlight, searchFlightsByNumber,searchFlightsByDate,searchFlightsByPlace};