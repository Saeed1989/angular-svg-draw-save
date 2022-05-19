using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SvgDrawServer.Models;
using System.Text.Json;

namespace SvgDrawServer.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RectangleController : ControllerBase
    {

        private readonly JsonSerializerOptions options = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = true
        };

        public RectangleController()
        {
        }

        // GET: api/Rectangle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rectangle>>> GetRectangleOption()
        {
            var jsonString = System.IO.File.ReadAllText("Data/rectangle-data.json");
            var jsonModel = JsonSerializer.Deserialize<Rectangle>(jsonString, options);
            if (jsonModel != null)
                return Ok(jsonModel);
            else return NotFound();
        }

        // POST: api/Rectangle
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rectangle>> PostRectangle(Rectangle rectangle)
        {
            System.IO.File.WriteAllText("Data/rectangle-data.json", JsonSerializer.Serialize(rectangle, options));
            return CreatedAtAction(nameof(GetRectangleOption), new { id = rectangle.Id }, rectangle);
        }

    }
}
