currentFile = File.expand_path(File.dirname(__FILE__))
targetFile = currentFile + "/../html//working_template.html"
system("cp #{currentFile}/template.html #{targetFile}")
system("git add #{targetFile}")
system("git commit -m 'reset working template'")
