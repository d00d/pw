App = Ember.Application.create();

App.Router.map(function() {
  this.resource('rrd');
  this.resource('sa');
  this.resource('p1');
  this.resource('p2');
  this.resource('p3');
  this.resource('p4');
  this.resource('p5');
});

App.RrdRoute = Ember.Route.extend ({
	model: function() {
		return ['$BRENT','$USD','$GOLD','ALS.TO','AAPL','AXL.TO','AFL','WMT','AMH','ARGS','ASHR','AUY','AXS','BAX','BXE','BRI.V','BMO','BABA','BMY','CCJ','CHL','CME','COH','CRAY','CRESY','CSCO','DE','DSUM','ELNK','ESV','EOG','EVT','FYLD','HSBC','IMMU','IPHYF','JNJ','KERX','KKR','LTL','LNN','LVMUY','NGPHF','NOV','NEWT','GAA','GMOM','GULTU','HTBX','LRE','LRE.L','QCOM','MGNX','NGPHF','NRP','NUV','DIS','PLG','PRA','ROP','SCPZF','SHLD','STZ','SYY','SDRL','T','TGT','TJX','TNH','SLW','UVV','VAR','VNR','WPRT','WRB','YHOO',];
	}
});

App.SaRoute = Ember.Route.extend ({
	model: function() {
		return ['RNWK','GWPH','LNN','GOGO','DGI','ARIA','SAND','WPRT','DBD','RPM','BMS','UVV','LEG','LPI','TGP','MDR','TIBX','NUAN','SWKS','MRVL','ALS.TO','SPN','KKR','STLD'];
	}
});

App.P1Route = Ember.Route.extend ({
	model: function() {
		return ['JNJ','WMT','MDT','DLB','GLW','ICCC','ERIC','EMC','D','CBI','DVN','L','KMI','TGP','TRGP','OKE','OGS','CHK','SSE','ETE','NFG','APC','EXXI','NG','DRTX','UNP','FCX','NRP','HSY','ATVI','MSFT','MCD','LO','DO','WRB','AFG','TRV','CB','Y','AXS'];
	}
});

App.P2Route = Ember.Route.extend ({
	model: function() {
		return ['DSUM','DBA','TBT','$VIX','GDX','$SILVER','$NYSI','$NASI','SPY','PSQ','DOG','SH','XLF','$MYY','SBB','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','$BPSPX','$BPHEAL','$BPUTIL','$BPFINA','$BPDISC','T','$BPSTAP','$BPINDY','$XOI','IYR','ROM','SCIF'];
	}
});

App.P3Route = Ember.Route.extend ({
	model: function() {
		return ['BXE','TROV','CVEO','WLL','CCJ','PER','BTU','APA','AREX','LPI','SCZ.V','SLV.TO','CPN','DNN','ENI','CF','CRZO','RGLD','SN','GENL.L','OXC.TO','SNM.V','WZR.V','FRU.TO','IOC','EGO','CPE','DMLP','SCCO','MND.TO','SLW','HK','PVG','SBR','FNV'];
	}
});

App.P4Route = Ember.Route.extend ({
	model: function() {
		return ['BP','NGLS','LINE','ARLP','BBEP','NRP','IIM','JPS','CHL','BMY','AXS','BAX','AFL','GOV','JRO','UUV','COH','KKR','LTL','GMOM','GLAD','AB','JPS','BMO','FRA','AZSEY','IDV','PCL','CME','HSBC','WMT','MCD','MEMP','KO','PG','JNJ','MSFT','BDX','SYY','INTC','AAPL','EPD','DPM','WPZ','KMI','SEP','VNR'];
	}
});
App.P5Route = Ember.Route.extend ({
	model: function() {
		return ['DSUM','$VIX','GDX','$SILVER','$NYSI','$NASI','SPY','PSQ','SQQQ','DOG','SH','SIJ','SZK','MYY','MZZ','SDD','SBB','RWM','QID','DXD','SDS','MZZ','HDGE','NYY','TWM','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','IYR','ROM','SCIF'];
	}
});
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['AFL','APD','ARCP','AVA','BAX','BBL','BNS','BP','CLX','COP','CVX','DLR','EMR','GD','GE','HRS','IBM','ITW','JNJ','KMI','KO','LO','MCD','MDT','MO','NSC','O','OGS','OHI','OKE','PEP','PG','PM','PSX','RDS.B','RTN','SBSI','SYY','T','TD','TGT','TIS','VOD','VZ','WFC','WMT','XOM','MSFT','INTC','STZ','CTO','FUBC','BP','RRC','KLAC','ENS','PM','CF','CPN','E','LLY','MDT','APC','BP','PM','VZ','MO','T','ABT','CRESY','CHK','CPN','FCX','KMI','PCL','SOHU','','TNH','SCCO','AFG','WRB','TRV','CB','PRA','AFSI','NG','AMH','WTW','ETE','EMC','TRGP','Y','D','WMT','HSY','IO','GOV','O','LNG','CSCO','DVA','LPI','DG','HL','NEA','IIM','NUV','NUAN','SWKS','TNH','FYLD','L','COST','SYLD','CJES','PKW','MIL','AREX','CPE','ESV','NOV','SDRL','MA','APA','EXXI','SWIR'];
  }
});