﻿namespace Assets.Scripts.Data.Rooms
{
	using System.Collections.Generic;
	using UnityEngine;

	[CreateAssetMenu(fileName = "RoomTemplates", menuName = "Room templates")]
	public class RoomTemplatesWrapper : ScriptableObject
	{
		public List<RoomTemplatesSet> RoomsSets = new List<RoomTemplatesSet>();
	}
}