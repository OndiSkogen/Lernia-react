using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LerniaReact.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        const string SEARCH_KEY = "a11698df-8e0f-4387-b2a2-26d8a511fac1"; 
        const string DEVIATIONS_KEY = "";
        const string TRIP_KEY = "";
        const string REALTIME_KEY = "";

        [Route("search/{term}")]
        public async Task Search([FromRoute] string term)
        {
            await Query($"https://api.resrobot.se/v2/location.name?key={SEARCH_KEY}&input={term}&format=json");
        }

        [Route("deviations/{siteId}")]
        public async Task Deviations([FromRoute] int siteId)
        {
            await Query($"http://api.sl.se/api2/deviations.json?key={DEVIATIONS_KEY}&siteId={siteId}");
        }

        [Route("trip/{fromId}/{toId}/{includeRealtime}")]
        public async Task Trip([FromRoute] int fromId, [FromRoute] int toId, [FromRoute] bool includeRealtime)
        {
            await Query($"http://api.sl.se/api2/TravelplannerV3/trip.json?key={TRIP_KEY}&originId={fromId}&destId={toId}&searchForArrival=0&realtime={includeRealtime}");
        }

        [Route("realtime/{siteId}/{timeWindow}")]
        public async Task Realtime([FromRoute] int siteId, [FromRoute] int timeWindow)
        {
            await Query($"http://api.sl.se/api2/realtimedeparturesv4.json?key={REALTIME_KEY}&siteid={siteId}&timewindow={timeWindow}");
        }

        private async Task Query(string url)
        {
            using (var request = new HttpClient())
            {
                var stream = await request.GetStreamAsync(url);
                Response.ContentType = "application/json";
                await stream.CopyToAsync(Response.Body);
            }
        }
    }
}