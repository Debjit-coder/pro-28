class launcherObject{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcherObjects=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcherObjects.bodyA=body;
	}

	fly()
	{
		this.launcherObjects.bodyA=null;
	}

	display()
	{
		if(this.launcherObjects.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}