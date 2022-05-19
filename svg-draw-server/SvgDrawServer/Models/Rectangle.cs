namespace SvgDrawServer.Models
{
    public class Rectangle
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int OriginX { get; set; }
        public int OriginY { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string StrokeColor { get; set; }
        public string FillColor { get; set; }
        public int StrokeWidth { get; set; }
    }
}
