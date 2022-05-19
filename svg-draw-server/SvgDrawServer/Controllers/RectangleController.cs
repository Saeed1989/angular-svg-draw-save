using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SvgDrawServer.Models;

namespace SvgDrawServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RectangleController : ControllerBase
    {
        private readonly RectangleContext _context;

        public RectangleController(RectangleContext context)
        {
            _context = context;
        }

        // GET: api/Rectangle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rectangle>>> GetRectangleOption()
        {
          if (_context.RectangleOption == null)
          {
              return NotFound();
          }
            return await _context.RectangleOption.ToListAsync();
        }

        // GET: api/Rectangle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rectangle>> GetRectangle(long id)
        {
          if (_context.RectangleOption == null)
          {
              return NotFound();
          }
            var rectangle = await _context.RectangleOption.FindAsync(id);

            if (rectangle == null)
            {
                return NotFound();
            }

            return rectangle;
        }

        // PUT: api/Rectangle/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRectangle(long id, Rectangle rectangle)
        {
            if (id != rectangle.Id)
            {
                return BadRequest();
            }

            _context.Entry(rectangle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RectangleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Rectangle
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rectangle>> PostRectangle(Rectangle rectangle)
        {
          if (_context.RectangleOption == null)
          {
              return Problem("Entity set 'RectangleContext.RectangleOption'  is null.");
          }
            _context.RectangleOption.Add(rectangle);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetRectangle", new { id = rectangle.Id }, rectangle);
            return CreatedAtAction(nameof(GetRectangleOption), new { id = rectangle.Id }, rectangle);
        }

        // DELETE: api/Rectangle/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRectangle(long id)
        {
            if (_context.RectangleOption == null)
            {
                return NotFound();
            }
            var rectangle = await _context.RectangleOption.FindAsync(id);
            if (rectangle == null)
            {
                return NotFound();
            }

            _context.RectangleOption.Remove(rectangle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RectangleExists(long id)
        {
            return (_context.RectangleOption?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
