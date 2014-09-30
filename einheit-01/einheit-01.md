# Einheit 1

## Inhalt

[Einführung](#einführung)

[Ziele](#ziele)

[Tools](#tools)

[Hilfe-Ressourcen](#hilfe-ressourcen)

[Frontend vs. Backend](#frontendvsbackend)

[Zusammenhänge zwischen HTML, CSS und Javascript](#zusammenhängezwischenhtmlcssundjavascript)

[Einführung HTML](#einführunghtml)

[Grundaufbau eines HTML-Dokuments](#grundaufbaueineshtmldokuments)

[Hyperlinks](#hyperlinks)

[Ausblick](#ausblick)

[Downloads](#downloads)

## Einführung

Im Tutorium lernen die Teilnehmer das programmatische Erstellen von Web-Frontends durch HTML, CSS und Javascript. Der Fokus liegt dabei auf der Anwendung der Inhalte nicht nur zur Erstellung normaler Websites, sondern im Besondern zur Entwicklung von Klickprototypen von Interfaces.

Durch die Anwendung der Websprachen sowie eines Designing-In-Browser-Workflows für bestimmte Teilbereiche werden dynamische, animierte, interaktive Prototypen erstellt. Im Laufe des Kurses wird besonders auf die zusätzlichen Möglichkeiten, die ein solcher Prototyp bietet (Motion Design, Präsentation im Web), eingegangen.

Die Teilnehmer lernen die modernen HTML5- und CSS3-Standards sowie einfachste Grundlagen von Javascript bzw. jQuery.

## Ziele

Am Ende des Kurses sollen die Teilnehmer das Wissen besitzen, selbstständig einen Klickprototypen zu erstellen, der in einem sauberen, konsistenten, den Standards entsprechenden Code geschrieben ist. Sie sollen in der Lage sein, das gewonnene Wissen auch auf die Entwicklung regulärer Websites zu übertragen.

Am Ende des Tutoriums gibt es einen dreiwöchigen Workshop, in dem mit Unterstützung des Tutors ein Prototyp entwickelt werden soll. Dabei kann es sich auch gerne um ein Interface aus einem regulären Fach (Interface Design, Interaktive Kommunikationssysteme, …) handeln.

## Tools

Zum Entwickeln von Web-Frontends sind nur ein Texteditor und ein Browser notwendig. Es ist sinnvoll, einen Texteditor mit automatischem Syntax-Highlighting zu verwenden.

Editoren, die umsonst verwendet werden können, sind zum Beispiel [Atom](https://atom.io/) oder [Brackets](http://brackets.io/). Besonders geeignet ist [Sublime Text](http://www.sublimetext.com/), für dessen Benutzung eine Lizenz nötig ist, die Demoversion läuft allerdings nie aus. Der beste kostenpflichtige Editor mit extrem vielen Features ist [Coda](http://panic.com/coda/) von Panic.

Für kleinere Snippets und zum Testen einzelner Funktionen bietet es sich vor allem zu Beginn an, [Codepen](http://codepen.io/pen/) oder [JSFiddle](http://jsfiddle.net/) zu verwenden. Dabei handelt es sich um Websites, auf denen es Eingabefelder für HTML-, CSS- und Javascript-Code gibt, der live ausgeführt werden kann. Auch Bibliotheken können direkt eingebunden werden. Die Code-Snippets lassen sich leicht mit anderen teilen und es gibt eine riesige Bibliothek mit Code-Beispielen, die andere Leute öffentlich geteilt haben, die häufig gute Problemlösungen enthalten oder Inspiration bieten.

Zum Testen der eigenen Websites sollte man möglichst mehrere Browser installiert haben, insbesondere [Chrome](http://www.google.de/intl/de/chrome/browser/) und [Firefox](https://www.mozilla.org/de/firefox); bei Windows-Rechnern wohl oder übel auch [Internet Explorer](http://windows.microsoft.com/de-DE/internet-explorer/download-ie).

## Hilfe-Ressourcen

Es ist manchmal schwer, sich an alle HTML-Tags oder CSS-Eigenschaften zu erinnern. Deshalb ist es gut, einige Hilfe-Seiten und einfache Dokumentationen zu kennen, auf denen man schnell etwas nachschlagen kann.

[devdocs.io](http://devdocs.io/) enthält sehr ausführliche Dokumentationen von HTML, CSS, Javascript und zahlreichen anderen Sprachen und Bibliotheken, die gut durchsuchbar sind und auch lokal installiert werden können. Die Informationen sind allerdings auch sehr komplex formuliert.

Die Dokumentationen von Panic sind auch verfügbar, ohne dass man Coda kauft ([HTML](http://docs.panic.com/#html), [CSS](http://docs.panic.com/#CSS)). Sie ähneln den Devdocs, sind aber etwas einfacher formuliert, mit besseren Beispielen, Hinweisen zu häufigen Fehlern und sind für Einsteiger besser geeignet.

Nicht alle HTML-Tags und CSS-Eigenschaften werden schon von allen Browsern unterstützt. Auf der Seite [CanIUse](http://caniuse.com/) lässt sich schnell und mit aktuellen Statistiken nachschlagen, wie verbreitet der Support ist.

Hilfe-Ressourcen zu Javascript bzw. jQuery sind auf Grund der Fülle an Funktionen meist zu komplex für Einsteiger und werden besprochen, wenn Javascript zum Einsatz kommt.

Auf [www.html5doctor.com](http://html5doctor.com) gibt es eine übersichtliche Liste aller Elemente und Tags der HTML5-Spezifikation. Zu jedem Element wird außerdem verständlich erklärt, wann es verwendet werden sollte.

## Frontend vs. Backend

In der Webentwicklung kann man zwischen der Frontend- und der Backend-Entwicklung unterscheiden: Das Frontend ist das Interface der Website/Webapp, die Benutzeroberfläche; das Backend ist die dahinter liegende Funktionalität. Wichtig zu verstehen ist: Der Code des Frontends wird auf Seite des Benutzers, im Browser, ausgeführt bzw. interpretiert; der Code des Backends auf dem Server.

Zur Entwicklung von Web-Frontends werden die Sprachen HTML, CSS und Javascript eingesetzt, für Backends gibt es eine Fülle von möglichen Sprachen (PHP, Ruby, Python, zunehmend Javascript, …). Auch die Verwaltung von Datenbanken (MySQL, Postgres, MangoDB) gehört zum Backend.

## Zusammenhänge zwischen HTML, CSS und Javascript

Der größte Vorteil der Websprachen liegt in der strikten Trennung der Funktionalitäten. Anders als bei Flash gibt es für jede Aufgabe eine eigene Sprache – so bleibt der Code übersichtlich und Änderungen lassen sich schnell durchführen.

HTML enthält die Struktur und den Inhalt des Dokumentes/der Website/des Interfaces, das bedeutet die reinen Informationen in Textform (und eingebettete Bilder o.ä.). Eine reine HTML-Website ist bereits [funktionsfähig](http://motherfuckingwebsite.com).

CSS wird in die HTML-Datei eingebettet. CSS-Dateien enthalten ausschließlich Spezifikationen zum Aussehen und der Animation der einzelnen Elemente.

Javascript wird ebenfalls in die HTML-Datei eingebettet. Scripts enthalten Programmcode; hier wird also die Funktionalität des Frontends entwickelt (abgesehen von einfachsten Interaktionen, die bereits standardmäßig in HTML verfügbar sind). Javascript-Code bezieht sich in unserem Fall in der Regel direkt auf einzelne HTML-Elemente. jQuery ist eine Bibliothek für Javascript, die viele hilfreiche Funktionen zur Verfügung stellt, und somit die Arbeit mit Javascript enorm erleichtert.

## Einführung HTML

Ziel der Entwicklung des World Wide Webs war es, Forschungsergebnisse möglichst schnell und unkompliziert mit anderen Forschern, auch an anderen Standorten zu teilen. Dazu wurde 1992 von einer Arbeitsgruppe um Tim Bernes-Lee am CERN HTML zur Strukturierung digitaler Dokumente und der erste Webbrowser zur Anzeige dieser entwickelt. Eine der wichtigsten Erneuerungen, die mit dem WWW im Vergleich zu klassischen Medien eingeführt wurden, ist, dass es sich bei den Websites um so genannten HyperText handelt.

[T. Berners-Lee & R. Cailliau – WorldWideWeb: Proposal for a HyperText Project – 1990](http://www.w3.org/Proposal.html)
> HyperText is a way to link and access information of various kinds as a web of nodes in which the user can browse at will.
> 				A hypertext page has pieces of text which refer to other texts.
> 
> Such references are highlighted and can be selected with a mouse. When you select a reference, the browser presents you with the text which is referenced: you have made the browser follow a hypertext link.

HTML steht für „HyperText Markup Language“ und ermöglicht es, zusätzlich zur Strukturierung von Dokumenten auch Verknüpfungen zu anderen Dokumenten („Hyperlinks“) einzufügen. Bei HTML handelt es sich um eine Auszeichnungssprache, es werden also Tags, die als Text in der HTML-Datei eingefügt werden, aber nicht im Browser dargestellt werden, verwendet. Es gibt Tags, die sich direkt auf das Aussehen des Inhaltes auswirken (z. B. &lt;h1&gt;&lt;/h1&gt; f&uuml;r &Uuml;berschriften ersten Grades) und Tags die nur der Strukturierung dienen (z. B. &lt;section&gt;&lt;/section&gt;).

HTML-Tags werden immer in spitzen Klammern geschrieben: &lt;tag&gt;. Bis auf wenige Ausnahmen gibt es zu jedem Tag auch ein schlie&szlig;endes Tag, das hinter der ersten spitzen Klammer einen Str&auml;gstrich enth&auml;lt: &lt;/tag&gt;.

```
<h1>Überschrift ersten Grades</h1>
```

Verschiedene Tags k&ouml;nnen in einander verschachtelt werden.

```
<p>Dies ist eine <u>Unterstreichung</u> in einem Absatz.</p>
```

Ziel der neuesten Generation von HTML ist es, möglichst semantisch, also selbsterklärend und gut lesbar, zu sein. Deswegen gibt es zum Beispiel neue Struktur-Tags, die sich direkt auf bestimmte Bereiche einer Website beziehen, wie &lt;nav&gt;&lt;/nav&gt; für die Navigation. Beim Schreiben von HTML-Seiten sollte man diese Maxime immer Hinterkopf behalten und versuchen, eine möglichst einfache, einleuchtende Struktur zu erstellen.

Die je aktuellste Spezifikation des HTML-Standarts kann [hier](http://www.w3.org/html/wg/drafts/html/master/Overview.html) nachgelesen werden. Dabei handelt es sich im Augenblick um die sich noch in Entwicklung befindende Version 5. Die aktuellste, offizielle Version von HTML, HTML 4.01, stammt von 1999 und gilt allgemein als veraltet.

## Grundaufbau eines HTML-Dokuments

[/einheit-01/grundaufbau.html](grundaufbau.html)

```
<html>
	<head>
		<title>Grundaufbau eines HTML-Dokuments</title>
	</head>

	<body>
		Hier steht der Inhalt der Seite.
	</body>
</html>
```

Jede HTML-Datei enthält ein Grundger&uuml;st von Tags, die eine interne Struktur vorgeben (diese wird nicht vom Browser dargestellt.) Das erste und letzte Tag jeder HTML-Datei sind die &lt;html&gt;-Tags. Zwischen den &lt;head&gt;-Tags befinden sich Meta-Informationen und weitere eingebundene Dateien (z. B. Javascript- oder CSS-Dateien). Zwischen den &lt;body&gt;-Tags befindet sich der vom Browser dargestellte Inhalt der Seite.

## Hyperlinks

[/einheit-01/hyperlink.html](hyperlink.html)

```
<html>
	<head>
		<title>Hyperlink</title>
	</head>

	<body>
		Das ist ein Hyperlink zum <a href="grundaufbau.html">Grundaufbau eines HTML-Dokuments.</a>
	</body>
</html>
```

Hyperlinks werden durch das &lt;a&gt;-Tag erstellt (a steht für anchor). Zwischen den Tags steht dabei der auf der Website anzuzeigende Text. Das Ziel des Hyperlinks wird im öffnenden Tag als Wert des Attributes „href“ („Hyperreference“) als relativer Dateipfad angegeben.

```
<a href="Zielpfad">Anzuzeigender Text</a>
```

Es ist auch möglich Hyperlinks zu verwenden, um einen Anker zu einem beliebigen Element im Dokument zu setzen. Das Zielelement muss hier für das Attribut „id“ mit einer eindeutigen Indentifikation erhalten, im „href“-Attribut des Hyperlinks wird die id des Elements mit einem vorausgehenden „#“ notiert.

```
<h1 id="zielelement">Zielelement</h1>
```

```
<a href="#zielelement">Anzuzeigender Text</a>
```			

## Ausblick

In der zweiten Einheit werden die zwischen den &lt;head&gt;-Tags abgelegten Informationen genauer betrachtet, außerdem werden die Tags zur typografischen Formatierung von Texten und die Tags für verschiedene Arten von Listen behandelt.

## Downloads

[einheit-01.zip](einheit-01.zip)
