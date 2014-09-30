# Einheit 2

## Inhalt

[Begriffe](#begriffe)

[Kommentare](#kommentare)

[DOCTYPE](#doctype)

[Informationen im head-Tag](#informationenimheadtag)

[Bock-Elmente vs. Inline-Elemente](#blockelementevsinlinelemente)

[Texte & Typografie](#texteundtypografie)

[Listen](#listen)

[Ausblick](#ausblick)

[Downloads](#downloads)

## Begriffe

HTML ist eine **Auszeichnungssprache**, die Strukturierung des Dokuments erfolgt also mit Hilfe von **Tags**. Es gibt öffnende und schließende Tags. Tags können bestimmte **Attribute** mit **Werten** haben, diese werden im öffnenden Tag notiert.

```
<tag attribut="wert">Inhalt</tag>
```

Attribute spielten vor allen Dingen in den späten 90ern, als CSS noch nicht verbreitet war, eine große Rolle, da hier das komplette (rudimentäre) Styling der Website durch Attribute erfolgt. Durch CSS nahm die Bedeutung der meisten Attribute enorm ab. In HTML5 dürfen beliebige eigene Attribute eingeführt werden, sie gewinnen also zunehmend wieder an Bedeutung.

## Kommentare

Durch seine einfache Struktur braucht ein HTML-Dokument nur selten Kommentare, also vom Browser nicht dargestellten Text. Anders als bei den meisten Sprachen gibt es bei HTML nur eine Art von Kommentaren, die sowohl ein-, als auch mehrzeilig sein kann. Das öffnende und schließende Tag eines Kommentares entspricht nicht der gewohnten HTML-Syntax:

```
<!-- Auskommentierter Text -->
```

**Achtung: Kommentare können nicht ineinander verschachtelt werden!**

## DOCTYPE

Über die Jahre wurden verschieden Versionen von HTML entwickelt. Damit der Browser weiß in welcher Version von HTML das Dokument geschrieben ist, wird an oberster Stelle im Dokument, also noch vor dem &lt;html&gt;-Tag, das DOCTYPE-Tag eingefügt. Bei früheren Version war das DOCTYPE-Tag furchtbar lang, komplex und unübersichtlich; bei der für uns relevanten, aktuellen Version HTML5 wurde das DOCTYPE-Tag stark gekürzt:

```
<!DOCTYPE HTML>
```

## Informationen im head-Tag

Im &lt;head&gt;-Tag eines HTML-Dokuments werden verschiedene wichtige Informationen abgelegt, die sich zwar auf das Verhalten des Browsers auswirken, von diesem aber nicht innerhalb der Website angezeigt werden.

### Informationen

Im &lt;title&gt;-Tag wird der Titel der Seite angegeben, wie er oben im Browserfenster angezeigt werden soll. Dieses Tag ist laut HTML-Spezifikation zwingend erforderlich.

Das &lt;base&gt;-Tag wird selten verwendet und gibt die Basis-URL der Website an, das bedeutet die URL, von der aus alle relativ angegeben Pfade im Dokument ausgehen.

Es gibt noch einige weitere Informations-Tags, diese sind aber veraltet und wurden weitgehend durch die &lt;meta&gt;-Tags ersetzt.

### meta-Tags

Die meisten Informationen über den Inhalt der Website, die für Suchmaschinen relevant sind werden über &lt;meta&gt;-Tags in das Dokument geschrieben:

```
<meta name="author" content="Name des Autors">
<meta name="description" content="Kurze Beschreibung des Inhalts der Website">
<meta name="keywords" content="Wichtige Stichwörter/Suchbegriffe zum Inhalt der Website">
<meta name="date" content="Erstellungsdatum">
<meta http-equiv="language" content="deutsch, de">
```

&lt;meta&gt;-Tags sind nicht zwingend in einem Dokument erforderlich, folgendes Tag sollte aber generell in jeder Seite auftauchen:

```
<meta charset="utf-8">
```

Damit wird dem Browser mitgeteilt was für ein Zeichensatz die HTML-Datei verwendet; das ist bei der Verwendung von Sonderzeichen und insbesondere Umlauten relevant. Mit UTF-8 ist man generell auf der sicheren Seite (Achtung, die Datei muss auch tatsächlich in diesem Format codiert sein!).

### Eingebundene Dateien

Mit dem &lt;link&gt;-Tag können andere Dateien in das Dokument eingebunden werden. Es wird am häufigsten für CSS-Dateien benutzt, kann aber zum Beispiel auch das Icon der Website einbinden:

```
<link rel="shortcut icon" href="/favicon.ico" />
```

Zum Einbinden von Javascript-Dateien wird das &lt;script&gt;-Tag verwendet.

Die genaue Syntax zum einbinden von CSS und Javascript wird zu gegebenen Zeitpunkt besprochen.

### Beispiel eines üblichen Dokument-Kopfes


[/einheit-02/dokumentkopf.html](dokumentkopf.html)

```
<head>

    <!-------------------------<!--! META ------------------------------>
    <title>Website-Titel</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="description" content="Kurze Beschreibung des Inhalts der Website">
    <meta name="keywords" content="Wichtige Stichwörter/Suchbegriffe zum Inhalt der Website">

    <!-------------------------<!--! FAVICON ------------------------------>
    <link rel="icon" href="imgs/sprites/favicon.ico" type="image/png">

    <!-------------------------<!--! STYLES ------------------------------>
    <link rel="stylesheet" type="text/css" href="/styles/reset.css">
    <link rel="stylesheet" type="text/css" href="/styles/style.css">

    <!-------------------------<!--! LIBARIES ------------------------------>
    <script type="text/javascript" src="/scripts/libaries/jquery.min.js"></script>

    <!-------------------------<!--! SCRIPTS ------------------------------>
    <script type="text/javascript" src="/scripts/script.js"></script>

</head>
```

## Block-Elemente vs. Inline-Elemente

## Texte & Typografie

Da HTML für das Strukturieren digitaler wissenschaftlicher Dokumente entwickelt wurde, gibt es viele Tags, die eine genaue Textstrukturierung erlauben. Teilweise wirken sich Tags nicht auf das Aussehen eines Textes aus, können aber semantisch im Dokument Sinn ergeben, zum Beispiel um auf eine bestimmte Art des Inhalts hinzuweisen.

### Überschriften

Es können Überschriften ersten bis sechsten Grades ausgezeichnet werden. Die Tags hierfür heißen, abgeleitet von „_heading_“, &lt;h1&gt; bis &lt;h6&gt;.


```
<h1>Überschrift ersten Grades</h1>
<h2>Überschrift zweiten Grades</h2>
<h3>Überschrift dritten Grades</h3>
<h4>Überschrift vierten Grades</h4>
<h5>Überschrift fünften Grades</h5>
<h6>Überschrift sechsten Grades</h6>
```

### Absätze

Ein Absatz (paragraph) von Text wird durch das p-Tag gekennzeichnet. Üblicherweise folgt auf das &lt;p&gt;-Tag ein Abstand.


```
<p>Ein Absatz eines längeren Textes</p>
```

Ein Zeilenumbruch (linebreak) innerhalb eines Absatzes wird durch das &lt;br&gt;-Tag erzeugt, sollte aber möglichst sparsam eingesetzt werden.

```
Ein Zeilenumbruch erreicht man durch ein einfaches Tag.<br>
Es besitzt kein schließendes Pendant.
```

## Listen

## Ausblick

In der dritten Einheit wird CSS eingeführt und der Grundaufbau einer CSS-Datei erklärt. Die CSS-Eigenschaften für Typografie und Farbe werden vorgestellt und das Verwenden von Ids und Klassen wird besprochen.

## Downloads

[einheit-02.zip](einheit-02.zip)
