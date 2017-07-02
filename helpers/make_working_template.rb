currentFile = File.expand_path(File.dirname(__FILE__))
targetFile = currentFile + "/../html/"
system("cp #{currentFile}/template.html #{targetFile}/working_template.html")
