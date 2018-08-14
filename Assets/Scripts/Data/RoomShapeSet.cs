﻿namespace Assets.Scripts.Data
{
	using System.Collections.Generic;

	public class RoomShapeSet
	{
		public string Name { get; set; }

		public List<RoomShapeSetItem> RoomShapeSetItems { get; set; } = new List<RoomShapeSetItem>();
	}
}