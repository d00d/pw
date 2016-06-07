App = Ember.Application.create();

App.Router.map(function() {
  this.resource('rrd');
  this.resource('sa');
  this.resource('p1');
  this.resource('p2');
  this.resource('p3');
  this.resource('p4');
  this.resource('p5');
  this.resource('p6');
  this.resource('p7');
  this.resource('p8');
});

// --------- ******** Grip ************
App.SaRoute = Ember.Route.extend ({
	model: function() {
		return ['EPR','NLY','O','KKR','DBD','BX','BMS','UVV','LEG','TGP','NAT','MDR','TIBX','CRESY','CSCO','SPN','KKR','STLD','UVV','NUV','LRE.L','VZ','TNH','T','WEC','XLU'];
	}
});
// --------- ******** SIA ************
App.P1Route = Ember.Route.extend ({
	model: function() {
		return ['JNJ','WMT','MDT','DLB','GLW','ICCC','ERIC','EMC','D','CBI','DVN','L','KMI','TGP','TRGP','OKE','OGS','CHK','SSE','ETE','NFG','APC','EXXI','NG','DRTX','UNP','FCX','NRP','HSY','ATVI','MSFT','HSBC','IMMU','MCD','LO','DO','WRB','AFG','TRV','CB','Y','AXS'];
	}
});
// --------- ******** Area 57 ************
App.P2Route = Ember.Route.extend ({
  model: function() {
  		var data = new Ember.RSVP.Promise(function(resolve) {
  			Tabletop.init({
        		key: '1GREdML1F5LThPDpTXSen_EaIiY8NMWPy4AAEIU1S_gI',
        		simpleSheet: true,
        		callback: function(data) {
        			resolve(data);
  				}
  			});
  				//var dis = document.getElementById("data").innerHTML = "['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']";
  				//return promise;
   		});
		//console.log("['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']");
		//console.log(data);
		//return "['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']";
		// iterate through and pick out ticker only.
		console.log(data);
		return data;
		
  	}
});

// --------- ******** LIKE NOW ************  
App.P3Route = Ember.Route.extend ({
	model: function() {
		return ['SWKS','MA','V','GREK','DVIGX','GILD','OIBR','OHI','NG','ABT','NAT','ADM','CLCT','SWKS','GLOP','TUP','KERX','PM','NLY','GSK','FMC','COR','DLR','GNW','CAT','DBD','AVP','ABC','AAPL','BX','TAP','CB','MRVL','BUD','COR','GLOP','ECA','GOLR','DOW','DBD','SCPZF','SLB','HD','JPM','CCI','FIZZ','PSA','GSK','SFDC','SBUX','ORCL','MSFT','MCD','NLY','VGR','JNJ','CALM','T','BA','PBH','NAT','GEO','RAI','AINV','ARCC','PM','MAIN','WMB','HCN','MO','GD','STZ','OAK','EWS','PICK','WY','FXI','QCOM','WPRT','SBIO','GDXJ','FEMS','OXY','GILD','THS','CVX','STLD','PFE','MRVL','CRAY'];
	}
});
// --------- ******** Resources Sector Picks ************
App.P4Route = Ember.Route.extend ({
	model: function() {
		return ['BP','NGLS','LINE','ARLP','BBEP','NRP','IIM','JPS','CHL','BMY','AXS','BAX','AFL','GOV','JRO','UUV','COH','KKR','LTL','GMOM','GLAD','AB','JPS','BMO','FRA','AZSEY','IDV','PCL','CME','HSBC','WMT','MCD','MEMP','KO','PG','JNJ','MSFT','BDX','SYY','INTC','AAPL','EPD','DPM','WPZ','KMI','SEP','VNR'];
	}
});
// --------- ******** Hedge & Macro Indicators ************
App.P5Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','DSUM','$SILVER','$NYSI','$NASI','SPY','PSQ','SQQQ','DOG','SH','SIJ','SZK','MYY','MZZ','SDD','SBB','RWM','DBA','TBT','$VIX','GDX','$SILVER','$NYSI','$NASI','SPY','PSQ','DOG','SH','XLF','$MYY','SBB','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','$BPSPX','$BPHEAL','$BPUTIL','$BPFINA','$BPDISC','$BPSTAP','$BPINDY','$XOI','IYR','QID','DXD','SDS','MZZ','HDGE','NYY','TWM','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','IYR','ROM'];

	}
});
// --------- ******** DOGS of the Dow ************
App.P6Route = Ember.Route.extend ({
	model: function() {
		return ['AAPL','CVX','VZ','CAT','WMT','CSCO','PFE','IBM','XOM','BA','MRK','INTC'];
	}
});
// --------- ******** PRIORS ************
App.RrdRoute = Ember.Route.extend ({
	model: function() {
		return ['AXL','AXS','AAPL','BX','BAX','BXLT','BMO','ARI','NAT','USCI','CALM','DEO','UA','TGT','GOGO','DGI','ARIA','KKR','NUAN','SWKS','MRVL','ALS.TO','CRAY','SWKS','SAND','WMT','AUY','BX','CCJ','CHL','CME','COH','DE','DSUM','ESV','EOG','EVT','FYLD','GILD','KERX','MUX','LVMUY','NOV','NEWT','MSFT','PEP','GMOM','GULTU','HTBX','TGT','MGNX','PLG','SCPZF','SHLD','STZ','SYY','SBUX','SDRL','SBIO','SHOP','TGT','TJX','VAR','WPRT','RPM','WRB'];
	}
});
// --------- ******** Active Portoflio Investments ************
App.P7Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','AA-B','AAPL','ABBV','AMZN','BMY','CSCO','DBD','DIS','FB','FUN','GE','GOOG','NUV','PEP','VZ','T','V','WEC','XLU'];
	}
});
// --------- ******** Active Portoflio Trades ************
App.P8Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','ALS.TO','ABC','BXE','BRI.V','ELNK','EWS','SCPZF','NGPHF','IPHYF','PICK','MFA','NGPHF','SLW','TNH','VNM'];
	}
});
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['ADM','CLCT','GLOP','FUN','TUP','PM','MO','EXPD','TIC','NYMT','AFL','PSEC','NLY','MFA','HTS','GAIN','BX','HCN','OHI','SNH','GSK','EGAS','COR-A','COR','DLR-E','DLR','GRMN','APD','ARCP','AVA','BBL','BNS','BP','CLX','COP','CVX','DLR','EMR','GE','HRS','IBM','ITW','JNJ','KMI','KO','LO','MCD','MDT','MO','NSC','O','OGS','OHI','OKE','PEP','PG','PM','PSX','RDS.B','RTN','SBSI','SYY','T','TD','TGT','TIS','VOD','VZ','WFC','WMT','XOM','MSFT','INTC','STZ','CTO','FUBC','BP','RRC','KLAC','ENS','PM','CF','CPN','E','LLY','MDT','APC','BP','PM','VZ','MO','T','ABT','CRESY','CHK','CPN','FCX','KMI','PCL','SOHU','TNH','SCCO','AFG','WRB','TRV','CB','PRA','AFSI','NG','AMH','WTW','ETE','EMC','TRGP','Y','D','WMT','HSY','IO','GOV','O','LNG','CSCO','DVA','LPI','DG','HL','NEA','IIM','NUV','NUAN','SWKS','TNH','FYLD','L','COST','SYLD','CJES','PKW','MIL','AREX','CPE','ESV','NOV','SDRL','MA','APA','EXXI','SWIR'];
  }
});